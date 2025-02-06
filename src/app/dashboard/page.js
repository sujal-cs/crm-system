import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import '../styles/modern-normalize.css';
import '../styles/utils.css';

export default function Dashboard() {
    return(
        <>
            <div>
                <LogoutLink className="btn">Log out</LogoutLink>
            </div>
        </>
    );
}


