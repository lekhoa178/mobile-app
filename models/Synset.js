export class Synset {
  constructor(id, word, def) {
    this.id = id;
    this.word = word;
    this.def = def;
  }
  getId() {
    return this.id;
  }
  getWord() {
    return this.word;
  }
  getDef() {
    return this.def;
  }
  setWord(word) {
    this.word = word;
  }
  setDef(def) {
    this.def = def;
  }
}
