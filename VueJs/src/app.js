new Vue({
    el: "#events",
    data: {
        event: {
            name: '',
            description: '',
            date: ''
        },
        events: [{
                id: 1,
                name: 'TIFF',
                description: 'Toronto International Film Festival',
                date: '2015-09-10'
            },
            {
                id: 2,
                name: 'The Martian Premiere',
                description: 'The Martian comes to theatres.',
                date: '2015-10-02'
            },
            {
                id: 3,
                name: 'SXSW',
                description: 'Music, film and interactive festival in Austin, TX.',
                date: '2016-03-11'
            }
        ],
        message: "Hello World!",
    },
    // Methods we want to use in our application are registered here
    methods: {
        addEvent: function () {
            if (this.event.name) {
                this.events.push(this.event);
                this.event = {
                    name: '',
                    description: '',
                    date: ''
                };
            }
        },
        deleteEvent: function (index) {
            if (confirm("Are you sure you want to delete this event?")) {
                // $remove is a Vue convenience method similar to splice
                console.log(index);
                this.events.splice(index, 1);
            }
        }
    }
});