import Controller from '@ember/controller';

export default Controller.extend({
    isShowingModal: false,
    transitionToRefresh: "refreshData",

    actions: {
        toggleModal: function () {
            this.toggleProperty('isShowingModal');
        },

        createNewTask(taskName) {
            let newRecord = this.store.createRecord('task', {
                name: taskName,
              })
              newRecord.save().then(function(post) {
              console.log(post)
              });
              this.send("toggleModal")
              this.send('refreshModel');
            },

        updateTaskStatus(task) {
            let updateStatus;
            if (task.get('status') == "done") {
                updateStatus = "new"
            } else {
                updateStatus = "done"
            }
            task.set('status', updateStatus);
            task.save();
            this.send('refreshModel');
        },

        deleteTask(taskId) {
            let task = this.get('model').findBy('id', taskId)
            task.destroyRecord();
        },

    },
  
    mapTask: Ember.computed('model.@each.status',function () {
        const doneTaskArr = Array();
        const newTaskArr = Array();
        const allTasks = this.get('model')

        this.get('model').forEach(task => {
            if (task.get('status') == "done") {
                doneTaskArr.push(task);
            } else {
                newTaskArr.push(task);
            }
        });
        return {
            "doneTaskArr": doneTaskArr,
            "newTaskArr": newTaskArr
        };
    }),
})
