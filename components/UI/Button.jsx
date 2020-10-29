import Button from '@material-ui/core/Button';
import Link from 'next/link'
import React from 'react';

function ButtonLink({to,...rest}) {
    return (
      <Link href={to} passHref style={{zIndex:20}}> 
        <MyButton {...rest} />
      </Link>
    )
  }

const MyButton = React.forwardRef(({variant,color,children,onClick,className}, ref) => {
    return (
        <Button size="large" className={className} variant={variant} color={color} ref={ref} onClick={onClick}>
        {children}
      </Button>
    )
  })

  export default ButtonLink