import { icons } from '../../utils/imports'
import CircleBtn from './Circle'
import DefaultBtn from './Default'

type Props = {
  type?: 'default' | 'circle'
  mode?: 'confirm' | 'cancel'
  title?: string
  action?: (value?: any) => void
  icon?: 'clock' | 'add'
}

const iconsRefs = {
  clock: icons.ClockIcon,
  add: icons.PlusIcon,
}

const Button = ({ type, title, action, mode, icon }: Props) => {
  const props = {
    title,
    action,
    mode,
    Icon: iconsRefs[icon ?? 'clock'],
  }

  const renderBtn = () => {
    if (type === 'circle') return <CircleBtn {...props} />
    else if (type === 'default') return <DefaultBtn {...props} />
  }

  return renderBtn()
}

export default Button
