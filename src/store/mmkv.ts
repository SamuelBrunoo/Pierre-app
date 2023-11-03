import { MMKV } from 'react-native-mmkv'

const storage = new MMKV({
  id: 'pierre',
})

const getStorageData = (key?: string) => {
  let data: any = {}
  if (key) {
    const d = storage.getString(key)
    data = d ? JSON.parse(d) : undefined
  } else {
    const keys = storage.getAllKeys()
    for (const k of keys) {
      const d = storage.getString(k)

      const info = d ? JSON.parse(d) : undefined
      data = {
        ...data,
        [k]: info,
      }
    }
  }

  console.log("datakjghlkj", data)

  return data
}

const setStorageData = (key: string, value: string | object) => {
  switch (typeof value) {
    case 'string':
      storage.set(key, value)
      break
    case 'object':
      storage.set(key, JSON.stringify(value))
      break
  }
}

export { storage, getStorageData, setStorageData }
