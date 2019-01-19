import tensorflow as tf

# ----------simple graph----------

# build graph
node1 = tf.constant(3.0, tf.float32)
node2 = tf.constant(4.0)
node3 = tf.add(node1, node2)

print(node1)
print(node2)
print(node3)

# graph run
sess = tf.Session()
print(sess.run([node1, node2]))
print(sess.run(node3))

# ----------using placeholder----------

# placeholder
# empty node를 생성

a = tf.placeholder(tf.float32)
b = tf.placeholder(tf.float32)
adder_node = a + b

# feed_dict
# 필요한 값들을 placeholder에 넘겨줌

print(sess.run(adder_node, feed_dict={a: 3, b: 4.5}))
print(sess.run(adder_node, feed_dict={a: [1, 3], b: [2, 4]}))

# RANK (몇차원 배열인지)
# scalar / vector / matrix / n-tensor ...
