import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditProfile } from "../../redux/reducers/profileSlice";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

export default function EditButton() {
    const token = useSelector(state => state.userAuth.token);
    const profile = useSelector((state) => state.profile);
    const [isEditing, setIsEditing] = useState(false);
    const [newUserName, setNewUserName] = useState('');
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (profile.userName) {
            setNewUserName(profile.userName);
        }
    }, [profile.userName]);

    const editUserName = async (e) => {
        e.preventDefault();
        if (!newUserName) {
            setError("The field cannot be empty.");
            return;
        }
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ userName: newUserName })
            });
            if (!response.ok) {
                throw new Error("Échec de la mise à jour du nom d'utilisateur");
            }
            dispatch(setEditProfile({ userName: newUserName }));
            setIsEditing(false);
        } catch (err) {
            setError("An error occurred: " + err.message);
            console.log(err);
        }
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <TextInput
                        label="Username"
                        id="username"
                        type="text"
                        autoComplete="username"
                        onChange={(e) => setNewUserName(e.target.value)}
                        value={newUserName} />
                    <p>First Name: {profile ? profile.firstName : 'Loading...'}</p>
                    <p>Last Name: {profile ? profile.lastName : 'Loading...'}</p>
                    {error && <p className="error-message">{error}</p>}
                    <br />
                    <Button
                        className="edit-button"
                        onClick={editUserName}>
                        Save
                    </Button>
                </div>
            ) : (
                <Button
                    className="edit-button"
                    onClick={() => setIsEditing(true)}>
                    Edit UserName
                </Button>
            )}
        </div>
    );
}
