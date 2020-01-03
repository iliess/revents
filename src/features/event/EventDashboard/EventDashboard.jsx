import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import {connect} from 'react-redux'
import {createEvent, updateEvent, deleteEvent} from '../eventActions'

// const eventsFromDashboard = 

const mapState = (state) => ({
    events: state.events
})

const actions = {
    createEvent,
    updateEvent,
    deleteEvent
}

class EventDashboard extends Component {

    handleCreateFormOpen = () => {
        this.setState({
            isOpen: true,
            selectedEvent: null,
        })
    }

    // handleUpdateEvent = (updatedEvent) => {
    //     this.setState(({events}) => ({
    //         events: events.map(event => {
    //             if(event.id === updatedEvent.id){
    //                 return  {...updatedEvent}
    //             }else{
    //                 return event
    //             }
    //         }),
    //         isOpen: false,
    //         selectedEvent: null
    //     }))
    // }

    // handleDeleteEvent = (id) => {
    //     this.setState(({events}) => ({
    //         events: events.filter(e => e.id !== id)
    //     }))
    // }

    handleDeleteEvent = (id) => {
        this.props.deleteEvent(id);
    }

    render() {
        const {events} = this.props;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList 
                    events={events} 
                    deleteEvent={this.handleDeleteEvent} />
                </Grid.Column>

                <Grid.Column width={6}>
                    <h2>Activity Feed</h2>
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect(mapState, actions)(EventDashboard);