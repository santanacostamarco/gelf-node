import Gelf from './src'

const gelf = new Gelf()

gelf.emit('gelf.log', 'wahwah')
