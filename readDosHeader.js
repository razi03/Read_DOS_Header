const fs = require('fs');

class DOSHeader {
    constructor(buffer) {
        this.e_magic = buffer.toString('ascii', 0, 2);
        this.e_cblp = buffer.readUInt16LE(2);
        this.e_cp = buffer.readUInt16LE(4);
        this.e_crlc = buffer.readUInt16LE(6);
        this.e_cparhdr = buffer.readUInt16LE(8);
        this.e_minalloc = buffer.readUInt16LE(10);
        this.e_maxalloc = buffer.readUInt16LE(12);
        this.e_ss = buffer.readUInt16LE(14);
        this.e_sp = buffer.readUInt16LE(16);
        this.e_csum = buffer.readUInt16LE(18);
        this.e_ip = buffer.readUInt16LE(20);
        this.e_cs = buffer.readUInt16LE(22);
        this.e_lfarlc = buffer.readUInt16LE(24);
        this.e_ovno = buffer.readUInt16LE(26);
    }
}


fs.readFile('/Users/razi/Desktop/Web Dev/NESCOM/TASK 1/notepad.exe', (err, data) => {
    if (err) throw err;

    const dosHeader = new DOSHeader(data);
    console.log(dosHeader);
});