import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import "../../App.css";
import { Button, Modal } from "react-bootstrap";

interface IState {
  contact: any[];
  show: boolean;
}

export default class ListOfContact extends React.Component<
  RouteComponentProps,
  IState
> {
  componentDidMount() {
    this.getContacts();
  }

  state: IState = {
    contact: [],
    show: false,
  };

  getContacts(): void {
    const response = localStorage.getItem("contacts");
    if (response) {
      this.setState({
        contact: JSON.parse(response),
      });
    }
  }

  deleteContact(contactId: string): void {
    if (contactId) {
      const contacts = localStorage.getItem("contacts");
      if (contacts) {
        const temp: Record<string, string | number>[] = JSON.parse(contacts);
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].contactId === contactId) {
            temp.splice(i, 1);
          }
        }
        localStorage.setItem("contacts", JSON.stringify(temp));
        this.getContacts();
      }
    }
  }
  
  handleModal(id: string) {
    const flag = window.confirm("Are you sure you want to delete?");
    if (flag) {
      this.deleteContact(id);
    }
  }

  render() {
    return (
      <div>
        <h3 className="title is-3">Contacts</h3>
        <Link to={"/contact/create"} className="button is-link">
          Create new
        </Link>
        <hr />
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Contact ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Type</th>
              <th>What's App</th>
              <th>Profile Pic</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.contact.map((contact, i) => (
              <tr key={i}>
                <td>{contact.contactId}</td>
                <td>{contact.firstname}</td>
                <td>{contact.phone}</td>
                <td>{contact.type}</td>
                <td>{contact.iswhatsapp ? "True" : "False"}</td>
                <td>
                  <img src={contact.profile_pic} height={100} width={100} />
                </td>

                <td>
                  <Link
                    to={`/contact/edit/${contact.contactId}`}
                    className="button is-warning"
                  >
                    Edit
                  </Link>
                  &nbsp;
                  <button
                    className="button is-danger"
                    onClick={() => this.handleModal(contact.contactId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
