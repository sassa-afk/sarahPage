from PIL import Image

# Caminhos para os arquivos
input_path = "novo.png"  # Nome do arquivo original
output_path = "novo.png"  # Nome do arquivo de saída (mesmo nome para substituir)

# Abrir a imagem
image = Image.open(input_path).convert("RGBA")

# Tornar o fundo branco (ou quase branco) transparente
data = image.getdata()
new_data = []
tolerance = 200  # Define a tolerância para tons próximos de branco (0 a 255)

for item in data:
    # Verificar se o pixel está próximo do branco
    if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:  # R, G, B > tolerância
        new_data.append((255, 255, 255, 0))  # Tornar transparente
    else:
        new_data.append(item)

image.putdata(new_data)

# Salvar a imagem com o fundo removido
image.save(output_path)
print(f"Fundo branco removido e imagem salva em {output_path}")

