import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { uuid } from "uuidv4";
import ButtonSave from "../ui/ButtonSave";
import storage from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

interface IOwnProps {}

interface IRouteProps {
  contactId: any;
}

interface IContact {
  contactId: string;
  firstname: string;
  phone: string;
  type: string;
  iswhatsapp: boolean;
  profile_pic: string;
}

interface ICustomerState {
  contact: IContact;
  isSaving: boolean;
}

export default class CreateEditContact extends React.Component<
  IOwnProps & RouteComponentProps<IRouteProps>,
  ICustomerState
> {
  state: ICustomerState;

  constructor(props: any) {
    super(props);
    this.state = {
      contact: {
        contactId: "",
        firstname: "",
        phone: "",
        type: "",
        iswhatsapp: false,
        profile_pic: "",
      },
      isSaving: false,
    };
  }

  componentDidMount() {
    this.getContactById(this.props.match.params.contactId);
  }

  submit = () => {
    this.setState({ isSaving: true });
    debugger;
    const contactId = this.state.contact.contactId;
    if (contactId !== "") {
      const contacts = localStorage.getItem("contacts");
      if (contacts) {
        const temp: IContact[] = JSON.parse(contacts);
        for (const val of temp) {
          if (val.contactId === contactId) {
            val.firstname = this.state.contact.firstname;
            val.phone = this.state.contact?.phone;
            val.iswhatsapp = this.state.contact?.iswhatsapp;
            val.type = this.state.contact?.type;
            val.profile_pic = this.state.contact?.profile_pic;
          }
        }
        localStorage.setItem("contacts", JSON.stringify(temp));
      }
      this.cancelIsSavingState();
      this.props.history.push("/contact");
    } else {
      // CREATE
      const contacts = localStorage.getItem("contacts");
      this.state.contact.contactId = uuid();
      if (contacts) {
        const temp: Record<string, string | number | boolean>[] =
          JSON.parse(contacts);
        temp.push({ ...this.state.contact });
        localStorage.setItem("contacts", JSON.stringify(temp));
      } else {
        localStorage.setItem(
          "contacts",
          JSON.stringify([{ ...this.state.contact }])
        );
      }

      this.cancelIsSavingState();
      this.props.history.push("/contact");
    }
  };

  // this to prevent memory leak if the loading is not stop before the this.props.history.push is called
  cancelIsSavingState(): void {
    this.setState({ isSaving: false });
  }

  getContactById(id: string): void {
    if (id) {
      const contacts = localStorage.getItem("contacts");
      if (contacts) {
        const temp: IContact[] = JSON.parse(contacts);
        const val = temp.find((x) => x.contactId === id);
        if (val)
          this.setState({
            contact: val,
          });
      }
    }
  }

  handleInputChanges = (e: any) => {
    if(e.currentTarget.name === 'iswhatsapp'){
      // e.currentTarget.checked = !e.currentTarget.checked
      this.setState({
        ...this.state,
        contact: {
          ...this.state.contact,
          [e.currentTarget.name]: e.currentTarget.checked,
        },
      });
      return;
    }
    this.setState({
      ...this.state,
      contact: {
        ...this.state.contact,
        [e.currentTarget.name]: e.currentTarget.value,
      },
    });
  };

  uploadPic(e: any) {
    console.log(e.target.files[0]);
    if (!e.target.files[0]) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(storage, `/files/${e.target.files[0].name}`);
    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // update progress
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          this.setState({
            ...this.state,
            contact: {
              ...this.state.contact,
              ["profile_pic"]: url,
            },
          });
        });
      }
    );
  }

  render() {
    return (
      <div>
        <h3 className="title is-3">
          {this.state.contact.contactId !== "" ? "Edit" : "Create"} Contact
        </h3>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  name="firstname"
                  value={this.state.contact.firstname || ""}
                  onChange={(e) => this.handleInputChanges(e)}
                  type="text"
                  className="input"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Phone</label>
              <div className="control">
                <input
                  name="phone"
                  value={this.state.contact.phone || ""}
                  onChange={(e) => this.handleInputChanges(e)}
                  type="text"
                  className="input"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Type</label>
              <div className="control">
                <select
                  className="input"
                  name="type"
                  required
                  value={this.state.contact.type || ""}
                  onChange={(e) => this.handleInputChanges(e)}
                >
                  <option value="Office">Office</option>
                  <option value="Personal">Personal</option>
                </select>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="label">is What's App</label>
                <input
                  type="checkbox"
                  required
                  name="iswhatsapp"
                  checked={this.state.contact.iswhatsapp}
                  onChange={(e) => this.handleInputChanges(e)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Profile Pic</label>
              <div className="control">
                <input
                  type="file"
                  required
                  name="profile_pic"
                  onChange={(e) => this.uploadPic(e)}
                />
              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
        <div className="level">
          <div className="level-left">
            <ButtonSave
              isSaving={this.state.isSaving}
              triggerParent={this.submit}
            />
            &nbsp;
            <Link to={"/contact"} className="button">
              Go back
            </Link>
          </div>
          <div className="level-right"></div>
        </div>
      </div>
    );
  }
}
