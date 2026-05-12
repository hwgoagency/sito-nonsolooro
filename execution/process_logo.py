import PIL.Image as Image
import numpy as np
import sys

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)

    r, g, b = data[:, :, 0], data[:, :, 1], data[:, :, 2]
    
    # Il checkerboard è fatto di grigi: i valori R, G, B sono molto simili tra loro
    # Calcoliamo la differenza tra il massimo e il minimo di R, G, B per ogni pixel
    max_rgb = np.max(data[:, :, :3], axis=2)
    min_rgb = np.min(data[:, :, :3], axis=2)
    diff = max_rgb - min_rgb
    
    # Se la differenza è piccola (è grigio/bianco/nero) -> rendi trasparente
    # Il logo oro ha una forte dominante gialla/arancione (R e G più alti di B), quindi diff sarà alta
    gray_mask = diff < 20
    
    # Rendi trasparente il checkerboard
    data[gray_mask, 3] = 0
    
    # Aggiungi una pulizia per i pixel molto scuri (ombre del logo o antialiasing)
    # se non vogliamo che siano trasparenti, non facciamo nulla. Ma se il checkerboard ha ombre,
    # possiamo fare un check aggiuntivo
    dark_mask = (max_rgb < 100) & (diff < 40)
    data[dark_mask, 3] = 0

    new_img = Image.fromarray(data)
    new_img.save(output_path)
    print(f"Logo processato (rimozione checkerboard) e salvato in {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python process_logo.py <input> <output>")
    else:
        remove_background(sys.argv[1], sys.argv[2])
