import clsx from 'clsx'
import type { FC } from 'react'

type Props = {
	className?: string
}

export const SidebarMenu: FC<Props> = ({ className }) => {
	return <div className={clsx(className)}>SidebarMenu</div>
}
