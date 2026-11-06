"""Gera os MP3 de narração com voz neural pt-BR (edge-tts).
Só regrava o que mudou: o nome do arquivo leva um hash do texto e da voz."""
import asyncio, hashlib, json, os, sys
import edge_tts

VOZES = ["pt-BR-ThalitaMultilingualNeural", "pt-BR-FranciscaNeural"]
RATE = "+4%"
PASTA = "audio"

async def gravar(texto, voz, caminho):
    await edge_tts.Communicate(texto, voz, rate=RATE).save(caminho)

async def main():
    textos = json.load(open("tools/textos.json", encoding="utf-8"))
    os.makedirs(PASTA, exist_ok=True)
    voz = None
    for v in VOZES:
        try:
            await gravar("Teste.", v, "/tmp/teste.mp3")
            voz = v
            break
        except Exception as e:
            print(f"voz {v} indisponível: {e}", file=sys.stderr)
    if not voz:
        sys.exit("Nenhuma voz neural disponível")
    print("voz:", voz)
    indice = {}
    for k, t in textos.items():
        h = hashlib.sha1((voz + RATE + t).encode()).hexdigest()[:10]
        nome = f"{k}-{h}.mp3"
        caminho = os.path.join(PASTA, nome)
        if not os.path.exists(caminho):
            for tentativa in range(3):
                try:
                    await gravar(t, voz, caminho)
                    break
                except Exception as e:
                    print(f"{k}: falhou ({e}), tentativa {tentativa + 1}", file=sys.stderr)
                    await asyncio.sleep(3)
            else:
                continue
            print("gravado", nome)
        indice[k] = nome
    validos = set(indice.values()) | {"index.json"}
    for f in os.listdir(PASTA):
        if f not in validos:
            os.remove(os.path.join(PASTA, f))
    json.dump({"voz": voz, "arquivos": indice}, open(os.path.join(PASTA, "index.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(len(indice), "áudios no índice")

asyncio.run(main())
