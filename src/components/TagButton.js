import React, { } from "react";

const Button = (props) => {
    
    const {
        buttonType, className, disabled, onClick, title, icon, destination, target,
        name, type, value, aria, tabIndex, children
    } = props;

    return (
        <>
            {buttonType === 'anchor'
                ? <a
                    className={className}
                    onClick={onClick}
                    aria-label={aria ? aria : title}
                    href={destination}
                    target={target}
                    rel="norefferer" 
                    tabIndex={tabIndex ? tabIndex : '0'}
                    disabled={disabled}
                >
                    {icon
                        ? <i />
                        : ''
                    }
                    {title}
                    {children}
                </a>
                : ''
            }

            {buttonType === 'button'
                ? <button
                    className={className}
                    onClick={onClick}
                    name={name}
                    aria-label={aria ? aria : name}
                    buttontype={type}
                    value={value}
                    tabIndex={tabIndex ? tabIndex : '0'}
                    disabled={disabled}
                >
                    {icon
                        ? <i />
                        : ''
                    }
                    {title}
                    {children}
                </button>
                : ''
            }

            {buttonType === 'div'
                ? <div
                    className={className}
                    onClick={onClick}
                    tabIndex={tabIndex ? tabIndex : '0'}
                    disabled={disabled}
                >
                    {icon
                        ? <i />
                        : ''
                    }
                    {title}
                    {children}
                </div>
                : ''
            }
        </>
    )
}

export default Button;