// Problem 1: Two Sum
// Description: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Example:

// python
// Copy code
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Problem 2: Reverse Integer
// Description: Given a 32-bit signed integer, reverse digits of an integer.

// Example:

// python
// Copy code
// Input: 123
// Output: 321

// Input: -123
// Output: -321

// Input: 120
// Output: 21
// Problem 3: Merge Two Sorted Lists
// Description: Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// python
// Copy code
// Input: l1 = [1, 2, 4], l2 = [1, 3, 4]
// Output: [1, 1, 2, 3, 4, 4]
// Problem 4: Valid Parentheses
// Description: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Example:

// python
// Copy code
// Input: "()"
// Output: true

// Input: "()[]{}"
// Output: true

// Input: "(]"
// Output: false
// Problem 5: Longest Substring Without Repeating Characters
// Description: Given a string s, find the length of the longest substring without repeating characters.

// Example:

// python
// Copy code
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Problem 6: Find First and Last Position of Element in Sorted Array
// Description: Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Example:

// python
// Copy code
// Input: nums = [5, 7, 7, 8, 8, 10], target = 8
// Output: [3, 4]

// Input: nums = [5, 7, 7, 8, 8, 10], target = 6
// Output: [-1, -1]
// Problem 7: Container With Most Water
// Description: Given n non-negative integers a1, a2, ..., an where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i are at (i, ai) and (i, 0). Find two lines, which together with the x-axis forms a container, such that the container contains the most water.

// Example:

// python
// Copy code
// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The container formed by the lines at indices 1 and 8 can hold 49 units of water.
// Problem 8: Median of Two Sorted Arrays
// Description: Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Example:

// python
// Copy code
// Input: nums1 = [1, 3], nums2 = [2]
// Output: 2.0
// Explanation: The merged array is [1, 2, 3] and the median is 2.0.

// Input: nums1 = [1, 2], nums2 = [3, 4]
// Output: 2.5
// Explanation: The merged array is [1, 2, 3, 4] and the median is (2 + 3) / 2 = 2.5.
// Problem 9: Rotate Image
// Description: You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// Example:

// python
// Copy code
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Input: matrix = [[ 5, 1, 9,11],[ 2, 4, 8,10],[13, 3, 6, 7],[15,14,12,16]]
// Output: [[15,13, 2, 5],[14, 3, 4, 1],[12, 6, 8, 9],[16, 7,10,11]]
// Problem 10: Group Anagrams
// Description: Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example:

// python
// Copy code
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]