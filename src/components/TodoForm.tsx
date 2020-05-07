import React, {useRef} from 'react';

interface TodoFormProps {
    onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null);
    // const [title, setTitle] = useState<string>('');
    //
    // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.target.value);
    // }

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.onAdd(ref.current!.value);
            // setTitle('');
            ref.current!.value = '';  // if object is possibly null - use '!' to avoid error
        }
    }

    return (
        <div className="input-field mt2">
            <input
                type="text"
                id="title"
                placeholder="Enter to-do"
                ref={ref}
                // value={title}
                // onChange={changeHandler}
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">Enter to-do</label>
        </div>
    )
}