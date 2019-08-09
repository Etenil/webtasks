module.exports = class Task {
  constructor(tasks) {
    this.tasks = tasks
  }

  save(task) {
    return new Promise((resolve, reject) => {
      process.nextTick(resolve, this.tasks.push(task))
    })
  }

  all() {
    return new Promise((resolve, reject) => {
      process.nextTick(resolve, this.tasks)
    })
  }
}
