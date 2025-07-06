import '../nodes/NodeStyles.css';

export const DeleteButton = ({ onClick, className = '', style = {} }) => {
    return (
        <button
            className={`delete-button ${className}`}
            style={style}
            onClick={onClick}
            title="Delete node"
        >
            ×
        </button>
    );
};
