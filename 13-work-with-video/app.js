// Подключаем модули
const fs = require("fs");
const child_process = require("child_process");

fs.rm("./files/out/output.mp4", () => {});

// Определяем асинхронную функцию для конвертации видео
async function convertVideo() {
    // Создаем процесс ffmpeg с нужными параметрами
    const ffmpeg = child_process.spawn("ffmpeg", [
        "-i",
        "./files/in/input.mkv", // Указываем входной файл
        "-c:v",
        "hevc_nvenc", // Указываем видеокодек для выходного файла с использованием видеокарты
        //"-crf", // Качество видео (0-51)
        //"45",
        "-r", // Фреймрейт
        "5",
        "-b:v", // Битрейт
        "1M",
        "./files/out/output.mp4", // Указываем выходной файл
    ]);

    // Обрабатываем ошибки и события
    ffmpeg.on("error", (error) => {
        console.error(error);
    });

    ffmpeg.on("close", (code) => {
        console.log(`ffmpeg exited with code ${code}`);
    });

    ffmpeg.stderr.on("data", (data) => {
        console.log(`ffmpeg stderr: ${data}`);
    });
}

// Вызываем функцию для конвертации видео
convertVideo();
