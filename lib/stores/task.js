module.exports = class Task {
  constructor(db) {
    this.db = db
  }

  save(task) {
    return this.db.tasks.insert(task)
  }

  all() {
    return this.db.tasks.find()
  }
}
