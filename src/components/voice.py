import speech_recognition as sr
from gtts import gTTS
import os
import time
import playsound
import pygame


def speak(text):
    tts = gTTS(text=text, lang="vi")
    filename = "D:\\garanmem\\Kì2-22-23\\DL\\Fake-News-Gen-master\\Fake-News-Gen\\Fake-News-Gen (2)\\src\\components\\voice.mp3"
    tts.save(filename)
    # playsound.playsound(filename)
    # tts.save("voice.mp3")

    # Phát âm thanh bằng thư viện pygame
    pygame.mixer.init()
    pygame.mixer.music.load(filename)
    pygame.mixer.music.play()

    # Chờ cho đến khi âm thanh phát xong
    while pygame.mixer.music.get_busy():
        continue

    # Đóng kết nối âm thanh
    pygame.mixer.quit()

    # Xóa tệp âm thanh khi không cần thiết
    os.remove(filename)


text = ""
file_path = "D:\\garanmem\\Kì2-22-23\\DL\\Fake-News-Gen-master\\Fake-News-Gen\\Fake-News-Gen (2)\\src\\components\\article.txt"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()
print(content)
speak(content)
