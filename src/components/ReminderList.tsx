import React from 'react';
import Reminder from '../models/Reminder';

interface ReminderListProps {
    items: Reminder[];
    onRevomeReminder: (id: number) => void;
}

function ReminderList({items, onRevomeReminder}: ReminderListProps) {
    return (
        <ul className='list-group'>
            {items.map(item => <li className='list-group-item' key={item.id}>{item.title}
            <button onClick={() => onRevomeReminder(item.id)}
            className="btn btn-outline-danger rounded-pill mx-2">
                Delete
            </button>
            </li>)
            }
        </ul>
    );
}

export default ReminderList;