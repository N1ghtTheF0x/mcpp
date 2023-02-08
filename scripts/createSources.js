const path = require("path")
const fs = require("fs")

const header = (name) => `#ifndef MINECRAFT_${String(name).toUpperCase()}_HPP\n#define MINECRAFT_${String(name).toUpperCase()}_HPP\n\nnamespace Minecraft\n{\n\tclass ${name}\n\t{\n\n\t};\n}\n\n#endif`
const source = (name) => `#include "${name}.hpp"\n`

const folder = process.argv[2]

const files = fs.readdirSync(folder)

const sourceFolder = path.resolve(process.cwd(),"source")

for(const file of files)
{
    const name = path.basename(file,path.extname(file))

    const hpp = path.resolve(sourceFolder,`${name}.hpp`)
    const cpp = path.resolve(sourceFolder,`${name}.cpp`)

    fs.writeFileSync(hpp,header(name))
    fs.writeFileSync(cpp,source(name))
}