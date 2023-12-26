use std::cmp::Ordering::{self, *};
use std::collections::HashMap;

pub fn compare(n: i32, m: i32) -> Ordering {
  if n < m {
    Less
  } else if n > n {
    Greater
  } else {
    Equal
  }
}
// enum Ordering {
//   Less,
//   Equal,
//   Greater,
// }

enum HttpStatus {
  Ok = 200,
  NotModified = 304,
  NotFound = 404,
}

enum Json {
  Null,
  Boolean(bool),
  Number(f64),
  String(String),
  Array(Vec<Json>),
  Object(Box<HashMap<String, Json>>),
}

enum BinaryTree<T> {
  Empty,
  NonEmpty(Box<TreeNode<T>>),
}

struct TreeNode<T> {
  element: T,
  left: BinaryTree<T>,
  right: BinaryTree<T>,
}

impl<T: Ord> BinaryTree<T> {
  fn add(&mut self, value: T) {
    match *self {
      BinaryTree::Empty => {
        *self = BinaryTree::NonEmpty(Box::new(TreeNode {
          element: value,
          left: BinaryTree::Empty,
          right: BinaryTree::Empty,
        }));
      }
      BinaryTree::NonEmpty(ref mut node) => {
        if value <= node.element {
          node.left.add(value);
        } else {
          node.right.add(value);
        }
      }
    }
  }
}
