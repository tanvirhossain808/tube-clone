import { FC } from "react";
import { RxAvatar } from "react-icons/rx";

const Avatar: FC<{ avatar?: string }> = ({ avatar }) => {
    return (
        <div>
            {
                !avatar &&
                <RxAvatar className="" size={30} />
            }
        </div>
    );
};

export default Avatar;