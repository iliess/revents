import React, { Component } from 'react'
import { Menu, Container, Button, Image } from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import SignedInMenu from '../Menus/SignedInMenu'
import SignedOutMenu from '../Menus/SignedOutMenu';

class NavBar extends Component {

    state = {
        authenticated: true
    };

    handleSignIn = () => this.setState({ authenticated: true });

    handleSignOut = () => {
        this.setState({ authenticated: false });
        this.props.history.push('/');
    }

    render() {
        const { authenticated } = this.state
        return (
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item as={NavLink} exact to='/' header>
                        <Image src="/assets/logo.png" alt="logo" style={{width: '50px', marginRight: '20px'}}/>
                        Re-vents
                      </Menu.Item>
                    <Menu.Item as={NavLink} exact to='/events' name="Events" />
                    <Menu.Item as={NavLink} to='/People' name="People" />
                    <Menu.Item as={NavLink} to='/test' name="Test" />
                    <Menu.Item>
                        <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Event" />
                    </Menu.Item>

                    {authenticated ? (
                        <SignedInMenu signOut={this.handleSignOut} />
                    ) : (
                        <SignedOutMenu signIn={this.handleSignIn} />
                    )}
                </Container>
            </Menu>
        );
    }
}

export default withRouter(NavBar);