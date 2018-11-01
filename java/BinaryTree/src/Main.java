import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		BinaryTree binaryTree = new BinaryTree();
		for(int i = 0; i < 10; ++i) {
			binaryTree.addNode((int)Math.floor(Math.random() * 40));
		}
		System.out.println("root tree" + binaryTree.getRoot().value);
		binaryTree.printInOrder(binaryTree.getRoot());
		System.out.println("enter number to search");
		Scanner scanner = new Scanner(System.in);
		int number = scanner.nextInt();
		System.out.println("Number is " + number);
		binaryTree.searchTree(number);
	}

}
