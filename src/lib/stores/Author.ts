const re = /^(\w*, \w*)/g;
const semi_last = /(;$)/g;
const by_regex = /(\w*. by)/g;
const first_by = /(^by)/g;
const re_first_last = /^(\w* \w*)/g;
const role_list = ["ed.", "edited", "ed", "ill", "illustrated", "ed@#", "photographs" , "editor", "jr", "jr.", "editor," , "jr,", "illustrations"]
const delete_list = ['..', '.', '[', ']', 'by', 'introduction', 'foreword', 'intro', 'with', 'chosen', 'selected', 'sel', "interviews", "project",
 'written', 'text', "book", "general", "senior", "consulting", "compiled", "compiler"]
let role = ""


export default class Author {
  constructor(public original: string, public word_num: number, public auth_num: number, public transformed: string) {
    for (var x in delete_list) {
      if (original.includes(delete_list[x])) {
        original = original.replace(delete_list[x], "")
      }
    }

    original = original.replace("@#", "");
    original = original.replace("  ", " ");
    original = original.replace("   ", " ");
    this.original = original
    this.transformed = this.parse(original.trim())
  }

  parse(string: string) {
    var transed = ""
    transed += this.checkOne(string)
    return transed
  }

  checkRole(author: string) {
    var words = author.split(" ")
    for (var i = 0; i < words.length; i++) {
      if (role_list.some(v => words[i].includes(v))) {//if the word has a role word
        return true;

      }
    }
    return false

  }

  checkOne(author: string) {
    author = author.trim()
    var transed_one = author
    var word_num = author.split(" ").length
    var words = author.split(" ")



    if (!this.checkRole(author)) {
      if (author.includes("Et")) {
        transed_one = author + "✔️"
      }
      else if (word_num == 1) {
        if (author.match(/\w/)) {
          transed_one = author  + "✔️"
        }
        else {
          transed_one = ""
        }
      }
      else if (word_num == 2) {
        if (author.match(re)) {
          transed_one = author  + "✔️"
        }
        else if (author.match(re_first_last)) {
          transed_one = words[1] + ", " + words[0]  + "✔️"
        }
        else {
          transed_one = "???: " + author
        }

      }
      else if (word_num == 3) {
        if (author.includes(",")) {
          transed_one = author + " ((LAST, FIRST MIDDLE))"


        }
        else {
          transed_one = words[2] + ", " + words[0] + " " + words[1]   + " ✔️"
        }

      }
      else if (word_num == 4) {
        transed_one = "?: " + words[2] + ", " + words[0] + " " + words[1] + " " + words[3] 


      }

      else {
        transed_one = "working + " + author


      }
    }
    else if (this.checkRole(author)) {
      //extract the role and format it properly
      for (var x in role_list) {
        for (var word in words) {
          if (words[word] ==(role_list[x])) {

            if (role_list[x].includes("ed")) {
              let roledFound = transed_one.replace(words[word], "") + ", (Editor)"
              let checkroled = roledFound.split(", (")
              transed_one =  this.checkOne(checkroled[0])+ ", (Editor)"

            }
             if (role_list[x].includes("ill")) {

              let roledFound = transed_one.replace(words[word], "") + ", (Illustrator)"
              let checkroled = roledFound.split(", (")
              transed_one =  this.checkOne(checkroled[0])+ ", (Illustrator)"



            }
             if (role_list[x].includes("photo")) {

              let roledFound = transed_one.replace(words[word], "") + ", (Photographer)"
              let checkroled = roledFound.split(", (")
              transed_one =  this.checkOne(checkroled[0])+ ", (Photographer)"
              // return transed_one.replace(words[word], ", (Photographer)")
            }
             if (role_list[x].includes("jr")) {

              let roledFound = transed_one.replace(words[word], "") + " \"Jr\""
              let checkroled = roledFound.split(" \"")
              transed_one =  this.checkOne(checkroled[0]) + " \"Jr\""

            }
    

          }
        }

      }
    }
    return transed_one




  }
  save() {
    return this;
  }
}