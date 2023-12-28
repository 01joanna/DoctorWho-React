import './button.css'

const ButtonComponent = ({ to, text, className = '', style = {} }) => {

    return (
        <div>
            <a href={to} target="_blank" style={style} className={`${'btn__component'} ${className}`}>
                {text}
            </a>
        </div>
    );
};

export default ButtonComponent;