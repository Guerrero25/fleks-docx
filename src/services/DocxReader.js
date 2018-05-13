import JSZip from 'jszip/dist/jszip'
import JSZipUtils from 'jszip-utils/dist/jszip-utils'
import Docxtemplater from 'docxtemplater'
import { saveAs } from 'file-saver'

class DocxReader {
    // This function loads a file in the local memory and then replaces the place holder with users inputs
    // param url string location of the file in the users hard drive 
    // param data object users input and date 
    loadRemoteFile(url, data) {
        return new Promise((resolve, reject) => {
            // Creates a binary file
            JSZipUtils.getBinaryContent(url, (error, content) => {
                if (error) reject(error)
                resolve(content)
            })
        })
        .then(content => {
            // Creates a instance of JSZip with the binary file
            const zip = new JSZip(content)
            // Creates a instance of Docxtemplater using the JSZip instance
            const docx = new Docxtemplater().loadZip(zip)
            
            // Renders the document (replace all occurrences of {addressee}, {remitter}, ...)
            docx.setData(data)
            docx.render()

            // Returns the file ready
            return docx.getZip().generate({
                type: "blob",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            })
        })
    }

    // Downloads the file into the users hard drive
    // param file Blob
    // param name string this param can be modify to something else
    // param ext string
    saveFile(file, name = 'docx-file', ext = 'docx') {
        saveAs(file, `${name}.${ext}`)
    }
}

export default DocxReader