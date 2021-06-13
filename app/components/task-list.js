import Component from '@ember/component';

export default Component.extend({
    transitionToUpdate: "updateTaskStatus",
    transitionToDelete: "deleteTask",
    actions: {

        updateTaskStatus() {
            let task = this.get('model').findBy('id', this.get('item').id);
            this.sendAction('transitionToUpdate', task);
        },

        removeTask() {
            let destroyId = this.get('item').id;
            this.sendAction('transitionToDelete', destroyId);
        },

        readTask() {
            let task = this.get('model').findBy('id', this.get('item').id)
            alert("task : " + task.get('name') + ' , status :' + task.get('status'))

        },
    },

    isDoneStatus: Ember.computed('model.@each.status',function () {
        return (this.get('item.status') == "done")
    }),

});
