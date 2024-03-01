import fs from 'fs/promises'

// Part 1: Read the contents of the file as a string
export async function readHelloWorld() {
    const uri = new URL('./resources/1-hello-world.txt', import.meta.url)

    // Return the file contents
    /* return await fs.CHANGE_ME(uri, { encoding: 'utf-8' }); */
}

// Part 2: Read the contents of 2-diary-entry.txt
export async function readDiaryEntry() {
    // The file to read is inside the `resources` folder
    // The file is called `2-diary-entry.txt`

    // Get the path to the file
    const uri = new URL(/* CHANGE_ME */)

    // Read the file contents into a string
    return '' // TODO - Return the contents of 2-diary-entry.txt
}

// Part 3: Write a string to a file
export async function writeSaveData(saveData) {
    const uri = new URL('./resources/3-save-data.txt', import.meta.url)
    const saveDataString = JSON.stringify(saveData)

    // TODO - Write the saveData string to the file
    /* await fs.REPLACE_ME(...) */
}

// Part 4: Append a line to a file
export async function appendLogEntry(logEntry) {
    // Append textToAppend to 4-log-file.txt inside the `resources` folder
    const textToAppend = logEntry + '\n'

    // const uri =
    // await ...
}
