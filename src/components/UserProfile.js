import './UserProfile.css';

export default function UserProfile({name, imageId, message}) {
    const imageUrl = (
        "https://i.imgur.com/" + imageId + "s.jpg"
    );

    return (
        <div className="user-card-wrapper">
            <img
            className="user-img"
            src={imageUrl}
            alt={name} />
            <div className="user-msg">
                <p>{message}</p>
            </div>
        </div>
    );
}