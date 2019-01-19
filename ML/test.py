import tensorflow as tf

hello = tf.constant('hello, tenser')

sess = tf.Session()

print(sess.run(hello))
