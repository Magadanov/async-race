interface DeleteApiI {
    path: 'garage' | 'winners';
    id: number;
}

export default function deleteApi(props: DeleteApiI) {
    fetch(`http://localhost:3000/${props.path}/${props.id}`, {
        method: 'DELETE',
    }).catch((error: Error) => {
        throw new Error(error.message);
    });
}
