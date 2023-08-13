export interface IOption{
    title: string,
    value: string,
}
export interface ISelectProps {
    selected: IOption | null;
    options: IOption[];
    placeholder?: string;
    mode?: 'rows' | 'cells';
    status?: 'default' | 'invalid';
    onChange?: (selected: IOption['value']) => void;
    onClose?: () => void;
}