# Aesop Generator by Long Short Term Memory (LSTM) with [ml5.js](https://ml5js.org/)
ถ้าเอานิทานอีสป 207 เรื่องมาผ่าน LSTM จะเกิดอะไรขึ้น...  

***
**Normal Model**
- นิทาน: 207 เรื่อง (278 KB)
- RNN hidden state: 256
- Layers in the RNN: 2
- Sequence length: 64
- Minibatch: 32
- Epochs: 100
- Train loss: 0.490  

**Overfit Model**
- จำนวนนิทาน: 207 เรื่อง ทำซ้ำ 7 ครั้ง (2.17 MB)
- RNN hidden state: 256
- Layers in the RNN: 2
- Sequence length: 64
- Minibatch: 32
- Epochs: 100
- Train loss: 0.002

***
เครดิตนิทานทั้งหมด: [กัลยาณมิตร](http://www.kalyanamitra.org/th/Aesop_list.php)