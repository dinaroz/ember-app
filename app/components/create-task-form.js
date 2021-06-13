import Component from '@ember/component';

export default Component.extend({
    transitionToCreate: "createNewTask",

    actions: {
        createNewTask() {
            this.sendAction('transitionToCreate', this.get('taskName'));
        },
    }
});


