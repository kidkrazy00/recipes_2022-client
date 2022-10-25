import React, { } from "react";

const Button = (props) => {
    
    const {
        buttonType, cClass, disabled, click, title, icon, destination, target,
        name, type, value
    } = props;

    return (
        <>
            {buttonType === 'anchor'
                ? <a
                    className={disabled ? 'cClass cClass' + '--disabled' : cClass}
                    onClick={click}
                    href={destination}
                    target={target}
                    rel="norefferer"
                    tabIndex="0"
                >
                    {icon
                        ? <i />
                        : ''
                    }
                    {title}
                </a>
                : ''
            }

            {buttonType === 'button'
                ? <button
                    disabled={disabled}
                    className={disabled ? cClass + ' btn--disabled' : cClass}
                    onClick={click}
                    name={name}
                    aria-label={name}
                    value={value}
                    type={type}
                    tabIndex="0"
                >
                    {icon
                        ? <i />
                        : ''
                    }
                    {title}
                </button>
                : ''
            }

            {buttonType === 'div'
                ? <div
                    className={disabled ? cClass + '--disabled' : cClass}
                    tabIndex="0"
                    // onClick={click}
                >
                    {icon
                        ? <i />
                        : ''
                    }
                    {title}
                </div>
                : ''
            }
        </>
    )
}

export default Button;