import './UserProfile.css';
import { users } from '../data/user_data';
import UserProfile from './UserProfile';

export default function UserCards() {
    return (
        <div className="user__cards-container">
            <h1>Check out latest customers reviews!</h1>
            <div className="user__cards-wrapper">
                {users.map(user => (
                    <UserProfile
                    key={user.id}
                    name={user.name}
                    imageId={user.imageId}
                    message={user.message}/>
                ))}
            </div>
        </div>
    );
}