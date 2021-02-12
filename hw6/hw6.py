import inp_reader

NOT_FOUND = 0
FOUND_ACROSS = 1
FOUND_DOWN = 2
DIR_DOWN = (1, 0)
DIR_ACROSS = (0, 1)

"""
    Finds the indices of the first letter of the word in the matrix.
"""


def find_indices(mat, first_letter, index_list, x, y):
    if x >= len(mat) or y >= len(mat):
        return
    if mat[x][y] == first_letter:
        if (x, y) not in index_list:
            index_list.append((x, y))
    find_indices(mat, first_letter, index_list, x + 1, y)
    find_indices(mat, first_letter, index_list, x, y + 1)


"""
    given a x, y coordinate check if the word exists in the matrix (based on direction of search)
"""


def check_if_found(mat, word, x, y, idx, direction):
    if idx == len(word):
        return FOUND_DOWN if direction[0] else FOUND_ACROSS
    if x >= len(mat) or y >= len(mat):
        return NOT_FOUND
    if word[idx] != mat[x][y]:
        return NOT_FOUND
    res = check_if_found(mat, word, x + direction[0], y + direction[1], idx + 1, direction)
    return res


"""
    check if the word exists in the entire matrix
"""


def find_word(mat, word, idx, index_list):
    if idx >= len(index_list):
        return NOT_FOUND, (0, 0)
    down_res = check_if_found(mat, word, index_list[idx][0], index_list[idx][1], 0, DIR_DOWN)
    across_res = check_if_found(mat, word, index_list[idx][0], index_list[idx][1], 0, DIR_ACROSS)
    if down_res or across_res:
        return down_res + across_res, index_list[idx]
    result, indices = find_word(mat, word, idx + 1, index_list)
    return result, indices


def print_result(result, x, y, word_len):
    if result is NOT_FOUND:
        print("not found")
    elif result == FOUND_ACROSS:
        print("(across, {}, {}, {})".format(x, y, y + word_len))
    else:
        print("(down, {}, {}, {})".format(y, x, x + word_len))


def main():
    mat, w = inp_reader.read_inp()
    first_occurrence = []
    find_indices(mat, w[0], first_occurrence, 0, 0)
    result, indices = find_word(mat, w, 0, first_occurrence)
    print_result(result, indices[0], indices[1], len(w))


if __name__ == '_main_':
    main()