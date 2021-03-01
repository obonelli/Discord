import React from 'react'
import { useDispatch } from "react-redux";
import { setChannelInfo } from './../features/appSlice';
import "./styles/SidebarChannel.css";
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

function SidebarChannel({ id, channelName }) {
    const dispatch = useDispatch();


    const handleDeleteChannel = () => {
        alert("You are going to delete this channel");

        // if (channelName) {
        //     db.collection('channels').add({
        //         channelName: channelName,
        //     })

        // }
    }

    return (
        <div className="sidebarChannel">

            <h4>
                <div className="sidebarChannel__listId"
                    onClick={() => dispatch
                        (setChannelInfo({
                            channelId: id, channelName: channelName

                        }))}>
                    <span className="sidebarChannel__hash">#</span>

                    {channelName}
                </div>
                <ClearRoundedIcon             
                    onClick={handleDeleteChannel}
                    className="sidebar__deleteIcon"
                />

            </h4>

        </div>
    )
}

export default SidebarChannel
