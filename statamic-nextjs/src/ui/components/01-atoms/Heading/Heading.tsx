import classNames from 'classnames'
import React, { HTMLAttributes, ReactNode } from 'react'

export type Props = {
  children: ReactNode
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | string
  headingStyle: 'xl-display' | 'lg-display' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | string
} & HTMLAttributes<HTMLHeadingElement>

export const Heading = ({
  headingLevel = 'h1',
  headingStyle = 'xl',
  children,
  className,
  ...props
}: Props) => {
  const HeadingTag = ({ ...tagProps }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(headingLevel, tagProps, children)

  return (
    <HeadingTag
      className={classNames(className, 'p-0 m-0', {
        'text-5xl md:text-6xl font-normal font-display leading-extra-tight':
          headingStyle === 'xl-display',
        'text-4xl md:text-6xl font-bold font-body leading-extra-tight':
          headingStyle === 'xl',
        'text-3xl md:text-5xl font-normal font-display leading-extra-tight':
          headingStyle === 'lg-display',
        'text-xl md:text-4xl font-bold font-body leading-tight':
          headingStyle === 'lg',
        'text-xl font-bold font-body leading-tight': headingStyle === 'md',
        'text-lg md:text-xl font-bold font-body leading-tight':
          headingStyle === 'sm',
        'text-base font-bold font-body leading-tight': headingStyle === 'xs',
      })}
      {...props}
    >
      {props.title}
    </HeadingTag>
  )
}
