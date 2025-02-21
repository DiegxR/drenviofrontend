import React from 'react'
import { User } from '../../../types/user'
import { Image } from '@heroui/react'

const UserProfile = ({item}:{item: User}) => {
  return (
    <div className="flex gap-4 items-center">
    <Image
      className="rounded-full"
      src={item?.picture?.thumbnail}
    />
    <div className="flex flex-col">
      <p>
        {item.name.title} {item.name.first} {item.name.last}
      </p>
      <p className="text-gray-400 select-all">{item.email}</p>
    </div>
  </div>
  )
}

export default UserProfile