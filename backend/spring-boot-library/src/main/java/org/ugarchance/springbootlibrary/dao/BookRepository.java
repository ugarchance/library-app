package org.ugarchance.springbootlibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.ugarchance.springbootlibrary.entity.Book;

public interface BookRepository extends JpaRepository<Book,Long> {
}
