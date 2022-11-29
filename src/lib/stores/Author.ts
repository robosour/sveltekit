const re = /^([A-Za-zÀ-ÖØ-öø-ÿ-]*, [A-Za-zÀ-ÖØ-öø-ÿ]*)/g;
const semi_last = /(;$)/g;
const by_regex = /([A-Za-zÀ-ÖØ-öø-ÿ]*. by)/g;
const first_by = /(^by)/g;
const re_first_last = /^([A-Za-zÀ-ÖØ-öø-ÿ-]* [A-Za-zÀ-ÖØ-öø-ÿ]*)/g;
const role_list = ["ed.", "ed ", "edited", " ed ", " ill ", ", ill", "illustrated", "ed@#", "photographs", "editor", "jr", "jr.", "editor,", "jr,", "illustrations", "editors", "editors,"]
const delete_list = ['..', '.', '[', ']', ' by ', 'introduction', 'foreword', 'intro', 'with', 'chosen', 'selected', ' sel ', "interviews", "project",
  'written', 'text', "yearbook", "general", "senior", "consulting", "compiled", "compiler", "annotated", "book", "paintings", "painting"]
let role = ""
export default class Author {
  constructor(public original: string, public word_num: number, public auth_num: number, public transformed: string) {

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
    for (var x in words) {

      if (role_list.some(v => words[x].includes(v))) {//if the word has a role word
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
      for (var x in delete_list) {
        if (author.includes(delete_list[x])) {
          author = author.replace(delete_list[x], " ")
        }
      }
      transed_one = this.extractAuthor(author, words, word_num, transed_one)

    }
    else if (this.checkRole(author)) {
      //extract the role and format it properly
      transed_one = this.exctractRole(words, transed_one)
    }
    return transed_one
  }
  extractAuthor(author: string, words: string[], word_num: number, transed_one: string) {
    if (author.includes("Et")) {
      transed_one = "✔️ " + author
    }
    else if (word_num == 1) {
      if (author.match(/\w/)) {
        transed_one = "✔️ " + author
      }
      else {
        transed_one = ""
      }
    }
    else if (word_num == 2) {
      if (author.match(re)) {
        transed_one = " ✔️ " + author
      }
      else if (author.match(re_first_last)) {
        transed_one = " ✔️ " + words[1] + ", " + words[0]
      }
      else if (words[0].endsWith(",")) {
        transed_one = " ✔️ " + author
      }
      else {
        transed_one = author + ' GRRR'
      }
    }
    else if (word_num == 3) {
      if (author.match(re)) {
        transed_one = " ✔️ " + author
      }
      else if (!author.includes(",")) {
        transed_one = " ✔️ " + words[2] + ", " + words[0] + " " + words[1]
      }
      else if (words[0].endsWith(",")) {
        transed_one = " ✔️ " + author
      }
      else {
        if (words[0].endsWith(",")) { //if like doe, john s or s doe, John
          transed_one = " ✔️ " + author
        }
        else if (words[1].endsWith(",")) { //if like doe, john s or s doe, John
          transed_one = " ✔️ " + words[1] + " " + words[2] + " " + words[0]
        }
        else {
          transed_one = " ✔️ " + words[2] + ", " + words[0] + " " + words[1]
        }
      }
    }
    else if (word_num > 4) {
      if (words[2].length > 1) {
        if (author.includes(",")) {
          var new_array = author.split(",")
          var new_author = "";
          for (const x in new_array) {
            new_author += this.checkOne(new_array[x]) + " ; "
            // new Author(new_array[x], 0, 0, "/").transformed
          }
          transed_one = new_author.replace("; ,", " ,")  //TESTINH
        }
        else {
          transed_one = "eee"
        }
      }
      else if (words[0].endsWith(",")) {
        transed_one = " ✔️ " + author
      }
      else {
        transed_one = " ooo"
      }
    }
    else {
      if (author.includes(",")) {
        var new_array = author.split(",")
        var new_author = "";
        for (const x in new_array) {
          new_author += new Author(new_array[x], 0, 0, "/")
        }

        transed_one = author + "  &&&" //TESTING
      }

    }
    return transed_one
  }
  exctractRole(words: string[], transed_one: string) {
    for (var x in role_list) {
      for (var word in words) {
        if (words[word] == (role_list[x])) {
          if (role_list[x].includes("ed")) {
            let roledFound = transed_one.replace(words[word], "") + ", (Editor)"
            let checkroled = roledFound.split(", (")
            transed_one = this.checkOne(checkroled[0]) + ", (Editor)"
          }
          if (role_list[x].includes("ill")) {
            let roledFound = transed_one.replace(words[word], "") + ", (Illustrator)"
            let checkroled = roledFound.split(", (")
            transed_one = this.checkOne(checkroled[0]) + ", (Illustrator)"
          }
          if (role_list[x].includes("photo")) {
            let roledFound = transed_one.replace(words[word], "") + ", (Photographer)"
            let checkroled = roledFound.split(", (")
            transed_one = this.checkOne(checkroled[0]) + ", (Photographer)"
            // return transed_one.replace(words[word], ", (Photographer)")
          }
          if (role_list[x].includes("jr")) {
            let roledFound = transed_one.replace(words[word], "") + " \"Jr\""
            let checkroled = roledFound.split(" \"")
            transed_one = this.checkOne(checkroled[0]) + " \"Jr\""
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