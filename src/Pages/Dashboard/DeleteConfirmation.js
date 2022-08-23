import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmation = ({ deletingAppointment, setDeletingAppointment, appointments, setAppointments }) => {
    const { _id, interview } = deletingAppointment;

    const handleDelete = id => {
        fetch(`http://localhost:5000/appointment/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Your appointment deleted');
                    setDeletingAppointment(null);
                    const remaining = appointments.filter(appointment => appointment._id !== id)
                    setAppointments(remaining);
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-600">Are you sure to delete {interview} appointment!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

                    <div class="modal-action">

                        <button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">Delete</button>

                        <label for="delete-confirm-modal" class="btn btn-xs btn-info">Cancel</label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmation;