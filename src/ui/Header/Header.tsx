import clsx from 'clsx'
import type { FC } from 'react'

type Props = {
	className?: string
}

export const Header: FC<Props> = ({ className }) => {
	return <div className={clsx(className)}>Header</div>
}
